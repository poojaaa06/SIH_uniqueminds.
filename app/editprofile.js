import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profilePicture}
            />
          </View>
          <Text style={styles.name}>Victoria Heard</Text>
          <Text style={styles.subtitle}>Active since Jul. 2019</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="person-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>First Name</Text>
            <Text style={styles.infoText}>Victoria</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="person-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Last Name</Text>
            <Text style={styles.infoText}>Heard</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="git-branch-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Branch</Text>
            <Text style={styles.infoText}>Main Office</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="business-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Department</Text>
            <Text style={styles.infoText}>Marketing</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="layers-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Working Floor</Text>
            <Text style={styles.infoText}>3rd Floor</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoText}>heard_j@gmail.com</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoText}>9898712132</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={24} color="#99D3B7" />
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoText}>Antigua</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Placeholder for bottom navbar */}
      <View style={styles.navbar}>
        <Link href="profile"><Icon name="home" size={24} color="#000" /></Link>
        <Link href="Applyleave"><Icon name="insert-chart" size={24} color="#000" /></Link>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#FFF" />
        </TouchableOpacity>
        <Icon name="message" size={24} color="#000" />
        <Link href="editprofile"><Icon name="person" size={24} color="#FF6347" /></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profilePictureContainer: {
    borderWidth: 3,
    borderColor: '#FF6347',
    borderRadius: 75,
    padding: 3,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    color: '#2DBE60',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  infoLabel: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#2DBE60',
  },
  editButton: {
    backgroundColor: '#2DBE60',
    padding: 15,
    borderRadius: 25,
    margin: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#FF6347',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;