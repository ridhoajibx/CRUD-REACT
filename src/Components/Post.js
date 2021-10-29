import React from 'react'
import { Button } from './Button';

export default function Post(props) {
    const { id, title, body, tags } = props;

    const editBtnProps = {
        className: "btn-primary mx-2",
        buttontext: "Edit",
        type: "button",
        onsubmit: () => {

        }
    }

    const deleteBtnProps = {
        className: "btn-danger mx-1",
        buttontext: "Hapus",
        type: "button",
        onsubmit: () => {

        }
    }
    return (
        <div>
            <div className="card">
                <section key={id}>
                    <h3>{title}</h3>
                    <hr className="new1"></hr>
                    <p>{body}</p>
                    <div>
                        {tags.length === 0 ? null :
                            tags.map(tag => (
                                <a href="!#" className="text-secondary-100">{`#${tag} `}</a>
                            ))
                        }
                    </div>
                    <div className="flex items-center">
                        <Button {...editBtnProps} />
                        <Button {...deleteBtnProps} />
                    </div>
                </section>
            </div>
        </div>
    )
}
