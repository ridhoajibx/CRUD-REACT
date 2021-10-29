import { useState } from 'react';
import './App.css';
import Post from './Components/Post';

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [allPosts, setAllPosts] = useState([
        {
            id: 1,
            title: "anak toktok",
            body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam non veniam voluptates voluptatum laudantium eaque nesciunt ea accusantium tempore nihil.",
            tags: ["fyp", "viral"]

        },
        {
            id: 2,
            title: "anak mama",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["viral", "hot"]
        },
        {
            id: 3,
            title: "anak siapa ?",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["viral", "hilang"]
        }
    ]);
    
    return (
        <div className="w-full">
            <div className="uppercase font-bold text-xl">title</div>
            {allPosts.length > 0 && allPosts.map(post => {
                const { id, title, body, tags } = post;
                return (
                    <Post id={id} title={title} body={body} tags={tags} />
                )
            })}
        </div>
    );
}

export default App;
