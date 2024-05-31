import { PostFilter } from "../PostFilter"
import { PostForm } from "../PostForm"
import { PostList } from "../PostList"
import { fix } from "../../fix"
// import { useState } from "react"

export const ServiceScreen = (props) => {

    // const [view, setView] = useState(true)

    const screenMode = () => {
        // if(view){
            return (
                <div align='center'>   
                    <h4>{props.leng.newOrder.ru}</h4>
                    <PostForm create={props.createPost} fixlist={props.fixlist}/>
                    <hr style={{margin: '15px 0'}}/>
                    <h4>{props.leng.searchOrder.ru}</h4>
                    <PostFilter filter={props.filter} setFilter={props.setFilter} dropList={fix.searchList}/>
                    <PostList props={props}/>
                </div>
            )
        // }
        // return (
        //     <div align='center'>   
        //         <h4>{props.leng.newOrder.ru}</h4>
        //         <PostForm create={props.createPost} fixlist={props.fixlist} setView={setView}/>
        //     </div>
        // )
    }

    return (
        <div align='center'>   
            {screenMode()}
        </div>
    )
}

