import { useRef, useState } from 'react';
import './App.css';
import { CustomButton } from './Components/Button';
import CreateNewPost from './Components/CreateNewPost';
import ModifyPost from './Components/ModifyPost';
import Post from './Components/Post';

const allTags = ["react", "vue", "svelte", "next", "gatsby"];

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    const [allPosts, setAllPosts] = useState([
        {
            id: 1,
            title: "Popular Frontend Framework",
            body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam non veniam voluptates voluptatum laudantium eaque nesciunt ea accusantium tempore nihil.",
            tags: ["react", "vue"]

        },
        {
            id: 2,
            title: "New Face",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["svelte"]
        },
        {
            id: 3,
            title: "React Framework",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["gatsby", "next"]
        }
    ]);

    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

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

    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost);
    };

    const editPost = (id) => {
        setEditPostId(id);
        toggleModifyPostComponent();
    };

    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map((eachPost) => {
            if (eachPost.id === editPostId) {
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    body: body || eachPost.body,
                    tags: tags || eachPost.tags
                };
            }

            return eachPost;
        });
        setAllPosts(updatedPost);
        toggleModifyPostComponent();
    };

    const deletePost = (id) => {
        const modifiedPost = allPosts.filter((eachPost) => {
            return eachPost.id !== id;
        });
        setAllPosts(modifiedPost);
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
    } else if (isModifyPost) {
        const post = allPosts.find((post) => {
            return post.id === editPostId;
        });

        return (
            <>
                <ModifyPost
                    title={post.title}
                    body={post.body}
                    defaultValueTag={post.tags}
                    updatePost={updatePost}
                    savePostTitleToState={savePostTitleToState}
                    savePostBodyToState={savePostBodyToState}
                    toggleCreateNewPost={toggleCreateNewPost}
                    toggleModifyPostComponent={toggleModifyPostComponent}
                    allTags={allTags}
                    tags={tags}
                    setTags={setTags}
                />
            </>
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
                                editPost={editPost}
                                deletePost={deletePost}
                            />
                        )
                    }) :
                        <div className="w-full mb-4">
                            <div className="flex justify-center items-center">
                                <span className="text-center">There are no posts yet.</span>
                            </div>
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
