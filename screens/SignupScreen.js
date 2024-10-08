import { View, Text, Image, TextInput, Touchable } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeInUp, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className='bg-white h-full w-full'>
        <StatusBar style="light" />
        <Image className='h-full w-full absolute' source={require('../assests/images/background-img.jpg')} />
    
        {/* lights */}
        <View className='absolute w-full flex-row justify-around' style={{ marginTop: 50 }}>
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[170] w-[170]' source={require('../assests/images/project-logo.png')} />
        </View>

        {/* Title and Form */}
        <View className="h-full w-full flex justify-around pt-48">
            {/* Title */}
            <View className="flex items-center" style={{ marginTop: 0 }}>
                <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
                    Sign Up
                </Animated.Text>
            </View>

            {/* Form */}
            <View className="flex items-center mx-4 space-y-4" style={{ marginTop: 0 }}>
                <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/25 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Username" placeholderTextColor={'white'} />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/25 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Email" placeholderTextColor={'white'} />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/25 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Password" placeholderTextColor={'white'} secureTextEntry />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
                    <Text className="text-black">Already have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.push('Login')}>
                        <Text className="text-white">Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}