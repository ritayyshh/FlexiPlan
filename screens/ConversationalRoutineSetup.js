import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ConversationalRoutineSetup = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hi! Let's set up your routine. What time do you wake up?", sender: 'AI' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef();

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { id: Date.now().toString(), text: userInput, sender: 'User' };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');

    setIsTyping(true); // Simulate AI typing
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: 'Great! Any hobbies you’d like to prioritize?', sender: 'AI' },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageBubble, item.sender === 'User' ? styles.userBubble : styles.aiBubble]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  useEffect(() => {
    // Scroll to the latest message
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.headerText}>Step 1 of 5</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {isTyping && (
        <View style={styles.typingIndicator}>
          <ActivityIndicator size="small" color="#555" />
          <Text style={styles.typingText}>AI is typing...</Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your response..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7f7f7' 
  },
  header: {
    backgroundColor: '#00008B',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chatContainer: { 
    padding: 10, 
    paddingBottom: 80 
  },
  messageBubble: { 
    marginVertical: 5, 
    padding: 10, 
    borderRadius: 10, 
    maxWidth: '80%' 
  },
  aiBubble: { 
    backgroundColor: '#444', 
    alignSelf: 'flex-start' 
  },
  userBubble: { 
    backgroundColor: '#00008B', 
    alignSelf: 'flex-end' 
  },
  messageText: { 
    color: '#fff', 
    fontSize: 16, 
    lineHeight: 22 
  },
  inputContainer: {
    position: 'absolute', 
    bottom: 0, 
    flexDirection: 'row', 
    padding: 10, 
    backgroundColor: 'white',
    borderTopWidth: 1, 
    borderTopColor: '#ddd',
  },
  input: { 
    flex: 1, 
    borderColor: '#ddd', 
    borderWidth: 1, 
    borderRadius: 25, 
    paddingHorizontal: 15 
  },
  sendButton: { 
    backgroundColor: '#00008B', 
    padding: 10, 
    borderRadius: 25, 
    marginLeft: 10, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  typingIndicator: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10 
  },
  typingText: { 
    marginLeft: 10, 
    color: '#555' 
  },
});

export default ConversationalRoutineSetup;