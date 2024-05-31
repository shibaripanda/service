import React, { useMemo, useState, useEffect } from "react"
import { fix } from "../fix"
import '../styles/App.css'
import MainPage from "../components/MainPage"
import Preloader from "../components/Preloader"
import { Print } from "../components/Print"
import { priceForClient } from "../module/priceForClient"
import { useNavigate } from "react-router-dom"
import { axiosCall } from "../module/axiosCall"
import { ServiceScreen } from "../components/mainScreen/ServiceScreen"
import { PogremuhiScreen } from "../components/mainScreen/PogremuhiScreen"
import { SettingsScreen } from "../components/mainScreen/SettingsScreen"
import { ExitScreen } from "../components/mainScreen/ExitScreen"

export function Service() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [filterPrice, setFilterPrice] = useState({query: ''})
  const [leng, setLeng] = useState(false)
  const [fixlist, setFixlist] = useState(false)
  const [pogremuhi, setPogremuhi] = useState([])
  const [print, setPrint] = useState({status: false, post: {}})
  const [error, setError] = useState(false)
  const [camp, setCamp] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(error){
      navigate('/')
    }
  }, [navigate, error])

  useEffect(() => {
    getCamp().catch(() => setError(true))
    getFix().catch(() => setError(true))
    getOrders().catch(() => setError(true))
    getLengs().catch(() => setError(true))
    getPogremuhi().catch(() => setError(true))
  }, [])
  
  const getOrders = async () => {
    const response = await axiosCall('GET', fix.link + '/orders/service/' + sessionStorage.getItem('campId'))
    response.data.forEach(item => item.open = 'close')
    setPosts(response.data.reverse())
  }
  const getLengs = async () => {
    const response = await axiosCall('GET', fix.link + '/leng')
    setLeng(response.data)
  }
  const getFix = async () => {
    const response = await axiosCall('GET', fix.link + '/camps/fix/' + sessionStorage.getItem('campId'))
    setFixlist(response.data)
  }
  const getPogremuhi = async () => {
    const response = await axiosCall('GET', fix.link + '/pogremuhi')
    const res = response.data.map(element => [element[0] = element[4] + ' ' + element[5], element[6], priceForClient(element[6], 3,2)])
    setPogremuhi(res)
  }
  const getCamp = async () => {
    const response = await axiosCall('GET', fix.link + '/camps/' + sessionStorage.getItem('campId'))
    sessionStorage.setItem('maincolor',response.data.colorsettings.main)
    setCamp(response.data)
  }
  const sortedPosts = useMemo(() => {
      if(filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts
    }, [filter.sort, posts]
  )
  const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => Object.values(post).join().toLowerCase().includes(filter.query.toLowerCase()))
      }, [filter.query, sortedPosts]
  )
  const searchedPogremuhi = useMemo(() => {
    let result = []
    result = result.concat(pogremuhi.filter(item => item[0].toLowerCase().includes(filterPrice.query.toLowerCase())))
    // console.log('1 ', result)
    result = result.concat(pogremuhi.filter(item => item[0].replaceAll(' ', '').toLowerCase().includes(filterPrice.query.toLowerCase())))
    // console.log('2 ', result)
    // for(let i of filterPrice.query.toLowerCase().split(' ')){
        result = result.concat(pogremuhi.filter(item => 
          item[0].toLowerCase().includes(filterPrice.query.toLowerCase().split(' ')[0]) && 
          item[0].toLowerCase().includes(filterPrice.query.toLowerCase().split(' ')[1]) &&
          item[0].toLowerCase().includes(filterPrice.query.toLowerCase().split(' ')[2])
          // item[0].toLowerCase().includes(filterPrice.query.toLowerCase().split(' ')[3])
        ))
    // }
    // console.log('3 ', result)
    // for(let i = 5; i < filterPrice.query.replaceAll(' ', '').length; i++){
    //     result = result.concat(pogremuhi.filter(item => item[0].toLowerCase().includes(filterPrice.query.toLowerCase().replaceAll(' ', '').substring(0, i))))
    // }
    // console.log('4 ', result)
    // for(let i = 0; i < filterPrice.query.replaceAll(' ', '').length - 2; i++){
    //     result = result.concat(pogremuhi.filter(item => item[0].toLowerCase().includes(filterPrice.query.toLowerCase().replaceAll(' ', '').substring(i, filterPrice.query.replaceAll(' ', '').length - 1))))
    // }
    // console.log('5 ', result)
    // console.log([...new Set(result)])
    return [...new Set(result)]
    }, [filterPrice.query, pogremuhi]
  )

  // const searchedPogremuhi = useMemo(() => {
  //   return pogremuhi.filter(item => item.join().toLowerCase().replace(/\s+/g, '').includes(filterPrice.query.toLowerCase().replace(/\s+/g, '')))
  //   }, [filterPrice.query, pogremuhi]
  // )
  const createPost = async (newPost) => {
    const newPostFromMongo = await axiosCall('POST', fix.link + '/orders', newPost).catch(() => setError(true))
    setPosts([{open: 'open',...newPostFromMongo.data}, ...posts])
  }
  const deletePost = async (post) => {
    await axiosCall('DELETE', fix.link + '/orders/' + post._id).catch(() => setError(true))
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const editPost = async (id, upObj) => {
    await axiosCall('PUT', fix.link + `/orders/${id}`, upObj)
  }
  const setOpen = (id) => {
    for(let i of posts){
        if(i._id === id) {
          if(i.open === 'close') i.open = 'open'
          else {
            i.open = 'close'
            break
          }
        }
        else{
          i.open = 'close'
        }
    }
    setPosts([...posts])
  }
  const printOrder = (post) => {
    setPrint({status: true, post: post, format: 'order'})
  }
  const printVar = (post) => {
    setPrint({status: true, post: post, format: 'var'})
  }

  if(print.status){
      return (
        <Print post={print.post} camp={camp} setPrint={setPrint} print={print}/>
      ) 
  }
  else if(leng && camp){
      return (
        <div className="App">  
          {MainPage([
            { name: 'Сервис',
              inbox: 
              <ServiceScreen
              colors={camp.colorsettings}
              fixlist={fixlist}
              leng={leng}
              camp={camp} 
              createPost={createPost} 
              filter={filter}
              editPost={editPost} 
              setFilter={setFilter} 
              deletePost={deletePost} 
              setOpen={setOpen}
              printOrder={printOrder} 
              printVar={printVar} 
              posts={sortedAndSearchedPosts}
              title={`${sortedAndSearchedPosts.length}/${posts.length}`}/>
            },
            { name: 'Погремухи',
              inbox:
              <PogremuhiScreen
              pogremuhi={pogremuhi}
              filter={filterPrice.query}
              setFilter={setFilterPrice}
              dropList={[]}
              searchedPogremuhi={searchedPogremuhi}
              filterPrice={filterPrice.query}
              getModule={getPogremuhi}/>
            },
            { name: 'Настройки',
              inbox: 
              <SettingsScreen
              camp={camp}
              getCamp={getCamp}
              />
            },
            { name: <div 
              onClick={() => {
                  navigate('/')
                  sessionStorage.clear()
                  // sessionStorage.removeItem('token')
                  // sessionStorage.removeItem('email')
                  // sessionStorage.removeItem('campId')
                  // sessionStorage.removeItem('maincolor')
              }}>Выход</div>,
              inbox: 
              <ExitScreen/>
            }
            ])}
        </div>
      )
  }
  else{
      return (
        // <Preloader/>
        <Preloader getModule={getLengs}/>
      )
  }
  
}


