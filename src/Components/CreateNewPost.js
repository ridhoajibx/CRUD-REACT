import React from "react";
import { CustomButton } from "./Button";
import MultiSelect from "./MultiSelect";

const CreateNewPost = (props) => {
    return (
        <div className="relative">
            <h1 className="my-4 text-3xl sm:text-4xl font-bold text-center">Create article</h1>
            <div className="max-w-screen-lg mx-auto pb-16">
                <div className="p-10 sm:p-12 md:p-16 bg-secondary-500 text-gray-100 rounded-lg relative">
                    <div className="mx-auto max-w-4xl">
                        <form onSubmit={props.savePost}>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="sm:w-5/12 flex flex-col">
                                    <div className="relative py-5 mt-6">
                                        <label className="absolute top-0 left-0 tracking-wide font-semibold text-sm" htmlFor="title">Title</label>
                                        <input
                                            className="w-full bg-transparent text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200"
                                            id="title"
                                            type="text"
                                            name="title"
                                            placeholder="E.g. Title"
                                            onChange={props.savePostTitleToState}
                                            ref={props.getTitle}
                                            required
                                        />
                                    </div>

                                    <div className="relative py-5 mt-6">
                                        <MultiSelect 
                                            data={props.allTags}
                                            selectedItem={props.tags}
                                            setSelectedItem={props.setTags}
                                        />
                                    </div>
                                </div>
                                <div className="sm:w-5/12 flex flex-col">
                                    <div className="relative py-5 mt-6">
                                        <label className="absolute top-0 left-0 tracking-wide font-semibold text-sm" htmlFor="name-input">Content</label>
                                        <textarea
                                            className="w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 hocus:border-pink-400 focus:outline-none transition duration-200"
                                            id="body"
                                            name="body"
                                            placeholder="E.g. Details about your content"
                                            rows="5"
                                            required
                                            onChange={props.savePostBodyToState}
                                            ref={props.getBody}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <CustomButton
                                    type="submit"
                                    className="btn-primary text-primary-800 mr-2"
                                    buttontext="Simpan"
                                />
                                <CustomButton
                                    type="button"
                                    className="btn-danger text-red-500"
                                    buttontext="Cancel"
                                    onClick={props.toggleCreateNewPost}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPost;
