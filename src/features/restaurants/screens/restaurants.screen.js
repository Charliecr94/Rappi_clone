import React, { useContext, useState } from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { Pressable, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Activity, Colors } from "react-native-paper"

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FavoritesContext } from './../../../services/favorites/favorites.context';


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setisToggled] = useState(false);
  return (
    <SafeArea>
    {isLoading && (
      <LoadingContainer>
        <Loading
          size={50}
          animating={true}
        />
      </LoadingContainer>
    )} 
      <Search 
      isFavoritesToggled={isToggled}
      onFavoritesToggle= {()=> setisToggled(!isToggled)}
      />
      {isToggled &&
      <FavoritesBar favorites={favorites} onNavigate={navigation.navigate}/> }
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={()=> 
              navigation.navigate("RestaurantDetail",{
                restaurant: item,
              })
            }
            >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};