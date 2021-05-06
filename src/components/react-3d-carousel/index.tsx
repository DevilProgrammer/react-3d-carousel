import React, { useState, useEffect } from 'react'
import './index.scss'
import leftImage from '../../assets/images/left.png'
import rightImage from '../../assets/images/right.png'

interface Item{
    url: string 
    onClick: () => void
}

interface IProps{
    list: Item[]
    preIconUrl?: string
    postIconUrl?: string
}


const Carousel:React.FC<IProps> = (props: IProps) => {
    const { list, preIconUrl, postIconUrl } = props
    const [current, setCurrent] = useState<number>(0)
    const handleClick = (index: number) => () =>{
        if(index === -1 && current === 0){
            setCurrent(list.length - 1)
            return
        }
        if(index === 1 && current === list.length - 1){
            setCurrent(0) // back to 0
            return
        }
        setCurrent(current + index)
    }

    const getCarouselClass = (index: number, current: number) => {
        if(index === current) return 'active'
        if( current - index === 1 || index - current === list.length - 1) return 'pre'
        if( index - current === 1 || current - index === list.length - 1 ) return 'post'
        return ''
    }
    

    return <div className='carousel-container'> 
        <div className='main'>
          <div className='slider-container'>
             <div className='slider-content'>
                  {
                      list.map((item, index)=>{ 
                       return (
                        <div className={`single-slider ${getCarouselClass(index, current)}`} key={index}>
                            <div className='left' style={{backgroundImage: `url(${preIconUrl || leftImage})`}} onClick={handleClick(-1)}></div>
                            <div className='right' style={{backgroundImage: `url(${postIconUrl || rightImage})`}} onClick={handleClick(1)}></div>
                            <div className='content' onClick={item.onClick}>
                                <img className='image' src={item.url} width='100%' height='100%' />
                            </div>
                      </div>
                          )
                      })
                  }
             </div>
          </div>
        </div>
    </div>
}

export default Carousel