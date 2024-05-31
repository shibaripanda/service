import { PostFilter } from "../PostFilter"
import Preloader from "../Preloader"
import TablePrice from "../TablePrice"

export const PogremuhiScreen = (props) => {
    const pogremuhiScreen = () => {
        if(props.pogremuhi.length){
          return(
            <div align='center'>
              <PostFilter filter={props.filter} setFilter={props.setFilter} dropList={props.dropList}/>
              {TablePrice(props.searchedPogremuhi, props.filterPrice)}
            </div>
          )
        }
        else{
          return <Preloader getModule={props.getModule}/>
        }
      }
  
      return (
            <div>
              {pogremuhiScreen()}
            </div>
        )
}
