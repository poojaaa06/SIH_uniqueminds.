import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const LeaveApplicationForm = ({ navigation }) => {
  const [approver] = useState('John Doe');
  const [leaveType, setLeaveType] = useState('');
  const [substitute, setSubstitute] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [remark, setRemark] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [attachment, setAttachment] = useState('');

  const [leaveTypeOptions] = useState(['Sick Leave', 'Casual Leave', 'Vacation']);
  const [substituteOptions] = useState(['Sub 1', 'Sub 2', 'Sub 3']);
  const [isLeaveTypeDropdownOpen, setLeaveTypeDropdownOpen] = useState(false);
  const [isSubstituteDropdownOpen, setSubstituteDropdownOpen] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setStartDate(selectedDate);
    }
    setShowStartDatePicker(false);
  };

  const handleEndDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setEndDate(selectedDate);
    }
    setShowEndDatePicker(false);
  };

  const handleSubmit = () => {
    console.log('Leave application submitted:', { approver, leaveType, startDate, endDate, remark, substitute, attachment });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Link href="Applyleave"> <FontAwesome name="chevron-left" size={20} color="#2DBE60" /></Link>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Application Form</Text>
      </View>

      <Text style={styles.label}>Approver</Text>
      <TextInput style={styles.textInput} value={approver} editable={false} />

      {/* Leave Type Dropdown */}
      <Text style={styles.label}>Leave Type</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setLeaveTypeDropdownOpen(!isLeaveTypeDropdownOpen)}>
        <Text>{leaveType ? leaveType : '- Select -'}</Text>
        <FontAwesome name={isLeaveTypeDropdownOpen ? 'chevron-up' : 'chevron-down'} size={16} />
      </TouchableOpacity>
      {isLeaveTypeDropdownOpen && (
        <View style={styles.dropdownOptions}>
          {leaveTypeOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.dropdownOption} onPress={() => {
              setLeaveType(option);
              setLeaveTypeDropdownOpen(false);
            }}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Leave Dates */}
      <View style={styles.datePickerContainer}>
        <Text style={styles.label}>Leave</Text>
        <View style={styles.dateRow}>
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowStartDatePicker(true)}>
            <Text>{startDate ? startDate.toLocaleDateString() : 'DD/MM/YYYY'}</Text>
            <FontAwesome name="calendar" size={16} />
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker value={startDate} mode="date" onChange={handleStartDateChange} />
          )}

          <TouchableOpacity style={styles.dateInput} onPress={() => setShowEndDatePicker(true)}>
            <Text>{endDate ? endDate.toLocaleDateString() : 'DD/MM/YYYY'}</Text>
            <FontAwesome name="calendar" size={16} />
          </TouchableOpacity>
          {showEndDatePicker && (
            <DateTimePicker value={endDate} mode="date" onChange={handleEndDateChange} />
          )}
        </View>
      </View>

      {/* Remark */}
      <Text style={styles.label}>Remark</Text>
      <TextInput
        style={[styles.textInput, styles.remarkInput]}
        placeholder="Write here..."
        value={remark}
        onChangeText={setRemark}
        multiline={true}
      />

      {/* Substitute Dropdown */}
      <Text style={styles.label}>Substitute</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setSubstituteDropdownOpen(!isSubstituteDropdownOpen)}>
        <Text>{substitute ? substitute : '- Select -'}</Text>
        <FontAwesome name={isSubstituteDropdownOpen ? 'chevron-up' : 'chevron-down'} size={16} />
      </TouchableOpacity>
      {isSubstituteDropdownOpen && (
        <View style={styles.dropdownOptions}>
          {substituteOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.dropdownOption} onPress={() => {
              setSubstitute(option);
              setSubstituteDropdownOpen(false);
            }}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Attachment (simulated) */}
      <Text style={styles.label}>Attachment</Text>
      <TouchableOpacity style={styles.attachmentInput} onPress={() => alert('File picker not implemented')}>
        <Text>{attachment ? attachment : 'Choose File'}</Text>
        <FontAwesome name="paperclip" size={16} />
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Apply</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
    paddingTop:30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  dropdown: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  dropdownOptions: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  dropdownOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 0.48,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  remarkInput: {
    height: 80,
  },
  attachmentInput: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  submitButton: {
    backgroundColor: '#2DBE60',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LeaveApplicationForm;

