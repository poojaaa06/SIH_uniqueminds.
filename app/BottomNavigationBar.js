// BottomNavigationBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const BottomNavigationBar = () => {
  return (
    <View style={styles.navbar}>
      {/* Home Icon */}
      <TouchableOpacity style={styles.navButton}>
        <Link href="/profile">
        <Icon name="home" size={30} color="#333" />
        </Link>
      </TouchableOpacity>

      {/* Task Icon */}
      <TouchableOpacity style={styles.navButton}>
        <Icon name="task" size={30} color="#333" />
      </TouchableOpacity>

      {/* Calendar Icon */}
      <TouchableOpacity style={styles.navButton}>
        <Link href="/attend">
       
        <Icon name="calendar-today" size={30} color="#333" />
        </Link>
      </TouchableOpacity>

      {/* Manual Check-in Icon */}
      <TouchableOpacity style={styles.navButton}>
        <Icon name="check-circle" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#F5F7FA', // Light background
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    padding: 10,
  },
  activeButton: {
    backgroundColor: '#2DBE60', // Highlight color for active item
    borderRadius: 30,
  },
});

export default BottomNavigationBar;
