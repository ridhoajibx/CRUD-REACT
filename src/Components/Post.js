import React from 'react'
import { Button } from './Button';

export default function Post(props) {
    const { id, title, body, tags } = props;

    const editBtnProps = {
        className: "btn-primary mx-2",
        buttontext: "Edit",
        type: "button",
        onSubmit: () => {

        }
    }

    const deleteBtnProps = {
        className: "btn-danger mx-1",
        buttontext: "Hapus",
        type: "button",
        onSubmit: () => {

        }
    }
    return (
        <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="mx-auto">
                <section key={id} className="max-w-sm rounded shadow-lg">
                    <div className="p-4">
                        <div className="text-primary-500 font-bold text-lg">{title}</div>
                        <div className="text-xl mt-4 font-bold">
                            {body}
                        </div>
                        <div className="flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs">
                            <div className="flex items-center mt-4">
                                {tags && tags.map((tag, idx) => (
                                    <a key={idx} href="!#" className="lowercase mx-1">
                                        #{tag}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <Button {...editBtnProps} />
                            <Button {...deleteBtnProps} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
