import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, icons, images, FONTS, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
const Home = () => {
    const router = useRouter();
    return ( 
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    < ScreenHeaderBtn iconUrl ={icons.menu} dimension = "60%"> </ScreenHeaderBtn>
                ),
                headerRight: () =>(
                  <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"></ScreenHeaderBtn>
                ),
                headerTitle: "Index"
            }}
            />
           < ScrollView showVerticalScrollIndicator = {false}>
            <View  style={{
                    flex:1,
                    padding: SIZES.medium
                }}
                >
                    <Welcome
                    
                    />
                <Popularjobs/>
                <Nearbyjobs/>
               
            </View>
             </ ScrollView>
        </SafeAreaView>
        )
}
export default Home;