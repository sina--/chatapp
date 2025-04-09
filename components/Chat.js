import React, { useState, useEffect } from 'react';
import { View, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
  const { name, backgroundColor } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView 
          style={styles.container}
          behavior="height"
          keyboardVerticalOffset={30}
        >
          <GiftedChat
            messages={messages}
            onSend={onSend}
            user={{ _id: 1 }}
          />
        </KeyboardAvoidingView>
      ) : (
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{ _id: 1 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat; 