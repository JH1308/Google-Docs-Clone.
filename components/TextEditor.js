import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { useRouter } from 'next/dist/client/router';
import { useSession } from 'next-auth/client';
import { db } from '../firebase';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

// Clinet side rending for TextEditor package, if rendered on server side will throw error.
const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr: false,
    }
    );

export default function TextEditor() {
    const [session] = useSession();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter();
    const { id } = router.query;

    const [snapshot] = useDocumentOnce(
        db
         .collection("userDocs")
         .doc(session.user.email)
         .collection("docs")
         .doc(id)
    );
// hin
    useEffect(() => {
        if (snapshot?.data()?.editorState) {
          setEditorState(
            EditorState.createWithContent(
              convertFromRaw(snapshot?.data()?.editorState)
            )
          );
        }
      }, [snapshot]);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);

        db
         .collection("userDocs")
         .doc(session.user.email)
         .collection("docs")
         .doc(id)
         .set(
            { editorState: convertToRaw(editorState.getCurrentContent()) }, // Getting editorstate and converting it to json to be stored in firebase 
            { merge: true }
        ) 
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
             editorState={editorState}
             onEditorStateChange={onEditorStateChange}
             toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto" 
             editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            />
       
        </div>
    )
}
