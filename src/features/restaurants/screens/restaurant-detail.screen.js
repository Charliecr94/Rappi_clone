import React, { useState } from "react";
import { List } from "react-native-paper"

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native-gesture-handler";

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setbreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setdinnerExpanded] = useState(false);
    const [drinksExpanded, setdrinksExpanded] = useState(false);

    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props)=> <List.Icon {...props} icon="bread-slice"/>}
                    expanded={breakfastExpanded}
                    onPress={()=> setbreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title= "Eggs"/>
                    <List.Item title= "Green juice"/>
                    <List.Item title= "Soup"/>
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    left={(props)=> <List.Icon {...props} icon="bread-slice"/>}
                    expanded={lunchExpanded}
                    onPress={()=> setLunchExpanded(!lunchExpanded)}
                    
                >
                    <List.Item title= "Rice and beans"/>
                    <List.Item title= "Casado with beef"/>
                    <List.Item title= "Casado with chicken"/>
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={(props)=> <List.Icon {...props} icon="bread-slice"/>}
                    expanded={dinnerExpanded}
                    onPress={()=> setdinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title= "Chifrijo"/>
                    <List.Item title= "Fried Chicken"/>
                    <List.Item title= "Pozole"/>
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={(props)=> <List.Icon {...props} icon="bread-slice"/>}
                    expanded={drinksExpanded}
                    onPress={()=> setdrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title= "Piscosaurio"/>
                    <List.Item title= "Cerveza"/>
                    <List.Item title= "Ron"/>
                </List.Accordion>                    
            </ScrollView>
        </SafeArea>
    );
};