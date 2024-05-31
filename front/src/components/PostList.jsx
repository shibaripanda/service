import React from "react"
import { PostItem } from "./PostItem"
import SimpleGrow from "./GrowMod"

export const PostList = (props) => {

    if(!props.props.posts.length){
        return <h1 style={{textAlign: 'center'}}>Пусто</h1>
    }

    return (
            <div>
                <h3 style={{textAlign: 'center'}}>
                    {props.props.title}
                </h3>
                {SimpleGrow(props.props.posts.map((post) => 
                    <PostItem
                    camp={props.props.camp} 
                    deletePost={props.props.deletePost}
                    editPost={props.props.editPost} 
                    editOpen={props.props.setOpen} 
                    printVar={props.props.printVar} 
                    printOrder={props.props.printOrder} 
                    post={post}
                    colors={props.props.colors} 
                    key={post.id}
                    />
                ))}
            </div>
    )
}
