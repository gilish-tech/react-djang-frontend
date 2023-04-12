import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from '@emotion/styled';
import { textAlign } from '@mui/system';
import StarOutlineIcon from '@mui/icons-material/StarOutline';



const FullIcon =  styled(StarIcon)({
    color:"orange",
    textAlign:"center",
    fontSize:"120%"

})
const NoIcon =  styled(StarOutlineIcon )({
    color:"orange",
    textAlign:"center",
    fontSize:"120%"
})

const HalfIcon =  styled(StarHalfIcon)({
    color:"orange",
    textAlign:"center",
    fontSize:"120%"
})

const EmptyIcon =  styled(StarOutlineIcon)({
    color:"Black",
    textAlign:"center",
    fontSize:"120%"
})

export const Addrating = ({rating}) => {
    
      if (rating == "3" || rating == "3.0" || rating == "3.1" || rating == "3.2" || rating == "3.3" ){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <NoIcon/>
                <NoIcon/>
            </>
        )

      } if (rating == "1" || rating == "1.0" || rating == "1.1" || rating == "1.2" || rating == "1.3" ){
        return(
            <>
                <FullIcon/>
                <NoIcon/>
                <NoIcon/>
                <NoIcon/>
                <NoIcon/>
            </>
        )
    } else if( rating == "1.4" || rating == "1.5" || rating == "1.6" || rating == "1.7"){
        return(
            <>
                <FullIcon/>
                <HalfIcon/>
                <NoIcon/>
                <NoIcon/>
                <NoIcon/>
            </>
        )
    }
    else if( rating == "1.8" || rating == "1.9" || rating == "2" || rating == "2.0" || rating == "2.1" || rating=="2.3"){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <NoIcon/>
                <NoIcon/>
                <NoIcon/>
            </>
        )
    }
    else if( rating == "2.4" || rating == "2.5" || rating == "2.6" || rating == "2.7" || rating=="2.8" || rating == "2.9" ){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <NoIcon/>
                <NoIcon/>
            </>
        )
      }

    else if( rating == "3.4" || rating == "3.5" || rating == "3.6" || rating == "3.7"){
      return(
          <>
              <FullIcon/>
              <FullIcon/>
              <FullIcon/>
              <HalfIcon/>
              <NoIcon/>
          </>
      )
    }

      else if( rating == "3.4" || rating == "3.5" || rating == "3.6" || rating == "3.7"){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <HalfIcon/>
                <NoIcon/>
            </>
        )

      }else if(rating == "3.8" || rating ==="3.9" ||rating == "4" || rating ==="4.0" || rating == "4.1" || rating == "4.2" || rating == "4.3" ){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <NoIcon/>
            </>
        )


      }else if(rating == "4.4" || rating ==="4.5" ||rating == "4.6" || rating ==="4.7"  ){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <HalfIcon/>
            </>
        )
      }else if(rating == "4.8" || rating ==="4.9" ||rating == "5" || rating ==="5.0"  ){
        return(
            <>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
                <FullIcon/>
            </>

        )
      }else if(rating == "no"  ){
        return(
            <>
                <EmptyIcon/>
                <EmptyIcon/>
                <EmptyIcon/>
                <EmptyIcon/>
                <EmptyIcon/>
                
            </>

        )
      }
         
}
