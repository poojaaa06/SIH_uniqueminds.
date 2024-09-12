import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Registration2 = () => {
  const [formData, setFormData] = useState({
    gender: '',
    branch: '',
    idNumber: '',
    workingHour: '', // Added workingHour to the state
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Step 2 of 2</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="transgender-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={(value) => handleChange('gender', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Branch"
            value={formData.branch}
            onChangeText={(value) => handleChange('branch', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="card-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="ID Number"
            value={formData.idNumber}
            onChangeText={(value) => handleChange('idNumber', value)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="time-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Working Hour"
            value={formData.workingHour}
            onChangeText={(value) => handleChange('workingHour', value)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2DBE60',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CDE8DC',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#2DBE60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Registration2;
