import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = () => {
 const [messages, setMessages] = useState([]);
 const signOut = () => {
   useLayoutEffect(() => {
     navigation.setOptions({
         headerLeft: () => (
                 <View style={{ marginLeft: 20 }}>
                      <Avatar
                        rounded
                        source={{
                           uri: auth?.currentUser?.photoURL,
                        }}
                    />
                </View>
        ),
          headerRight: () => (
              <TouchableOpacity style={{
                   marginRight: 10
                }}
              >
                 <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
        )
    })
 }, [navigation])
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  )
}

export default ChatScreen