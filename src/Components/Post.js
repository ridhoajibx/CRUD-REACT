import React from 'react'

export default function Post(props) {
    const { id, title, body, tags } = props;
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
                    <button>Edit</button>
                    <button>Delete</button>
                </section>
            </div>
        </div>
    )
}
