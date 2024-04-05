"use client"
// import React, { useState } from 'react'
// import styles from "./write.module.css"
// import Image from 'next/image'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.bubble.css';
// import { useRouter } from 'next/navigation';

// const Writepage = () => {
//     const router=useRouter();
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState("");
//     const [title, setTitle] = useState("");

//     const handlePublish = async () => {
//         try {
//             console.log(value);
//             console.log(title);
//             const response = await fetch('/api/write', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     title: title,
//                     content: value,
//                     tag: "reactjs" 
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error('no network response');
//             }

            
//             console.log('Post successfully published');
//         } catch (error) {
//             console.error('Error publishing post:', error);
            
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <input type="text" placeholder="Title" className={styles.input} onChange={(e) => setTitle(e.target.value)} />
//             <div className={styles.editor}>
//                 <button className={styles.button} onClick={() => setOpen(!open)}>
//                     <Image src="/images/plus.png" alt="" width={16} height={16} />
//                 </button>
//                 {open && (
//                     <div className={styles.add}>
//                         <button className={styles.addbutton}>
//                             <Image src="/images/image.png" alt="" width={16} height={16} />
//                         </button>
//                         <button className={styles.addbutton}>
//                             <Image src="/images/external.png" alt="" width={16} height={16} />
//                         </button>
//                         <button className={styles.addbutton}>
//                             <Image src="/images/video.png" alt="" width={16} height={16} />
//                         </button>
//                     </div>
//                 )}
//                 <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell Your Story" className={styles.TextArea} />
//             </div>
//             <button className={styles.publish} onClick={handlePublish}>Publish</button>
//         </div>
//     );
// };

// export default Writepage;
import React, { useState } from 'react';
import styles from "./write.module.css";
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';

const Writepage = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    const handlePublish = async () => {
        try {
            console.log(value);
            console.log(title);
            const response = await fetch('/api/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    content: value,
                    tag: "reactjs" 
                }),
            });

            if (!response.ok) {
                throw new Error('no network response');
            }

            console.log('Post successfully published');
        } catch (error) {
            console.error('Error publishing post:', error);
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/images/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addbutton}>
                            <Image src="/images/image.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addbutton}>
                            <Image src="/images/external.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addbutton}>
                            <Image src="/images/video.png" alt="" width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill 
                    theme="bubble" 
                    value={value} 
                    onChange={setValue} 
                    placeholder="Tell Your Story" 
                    className={styles.TextArea} 
                    modules={modules} // Include the modules object here
                />
            </div>
            <button className={styles.publish} onClick={handlePublish}>Publish</button>
        </div>
    );
}


export default Writepage;

