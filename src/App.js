import { useRef, useState } from 'react';
import './App.css';
import { CustomButton } from './Components/Button';
import CreateNewPost from './Components/CreateNewPost';
import Post from './Components/Post';

const allTags = ["react", "vue", "svelte", "next", "gatsby"];

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    console.log(tags, 'cek')
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

    const [isCreateNewPost, setIsCreateNewPost] = useState(false);

    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost);
    };

    const getTitle = useRef();
    const getBody = useRef();

    const savePostTitleToState = (event) => {
        setTitle(event.target.value);
    };

    const savePostBodyToState = (event) => {
        setBody(event.target.value);
    };

    const savePost = (event) => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, { title, body, id, tags }]);
        getTitle.current.value = "";
        getBody.current.value = "";
        setTags([])
        toggleCreateNewPost();
    };

    if (isCreateNewPost) {
        return (
            <CreateNewPost
                savePostTitleToState={savePostTitleToState}
                savePostBodyToState={savePostBodyToState}
                getTitle={getTitle}
                getBody={getBody}
                savePost={savePost}
                allTags={allTags}
                tags={tags}
                setTags={setTags}
                toggleCreateNewPost={toggleCreateNewPost}
            />
        );
    }

    return (
        <div className="w-full">
            <div className="my-5 mx-4">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">Articles</h1>
                </div>

                <div className="flex flex-wrap py-4">
                    {allPosts.length > 0 ? allPosts.map(post => {
                        const { id, title, body, tags } = post;
                        return (
                            <Post
                                key={id}
                                id={id}
                                title={title}
                                body={body}
                                tags={tags}
                            />
                        )
                    }) :
                        <div>
                            <li>There are no posts yet.</li>
                        </div>
                    }
                </div>

                <div className="flex justify-center items-center">
                    <CustomButton
                        className="btn-primary"
                        onClick={toggleCreateNewPost}
                        buttontext="Create New Post"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
