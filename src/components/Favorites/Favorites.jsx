import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css"





const Favorites = () =>{
  const favorites = useSelector(state => state.myFavorites)

  return(
    <div className={styles.page}>
      <div className={styles.cards}>
      {
        favorites.map((fav)=>{
          return <Card 
                key={fav.name} 
                name={fav.name} 
                species={fav.species} 
                gender={fav.gender} 
                image={fav.image}
                id={fav.id}
              />
        })
      }
    </div>
    </div>
    
  )
}

export default Favorites;