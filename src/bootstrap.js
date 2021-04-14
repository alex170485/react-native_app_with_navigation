import * as Font from 'expo-font'

export  async function bootstrap () {
    await Font.loadAsync({
        'open-bolt': require('../assets/Fonts/OpenSans-Bold.ttf'),
        'open-regular': require('../assets/Fonts/OpenSans-Regular.ttf')
    })}