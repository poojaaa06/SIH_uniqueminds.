import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Platform, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomNavigationBar from './BottomNavigationBar';

const LeaveApplicationForm = () => {
    const [leaveType, setLeaveType] = useState('Travel');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [reason, setReason] = useState('');
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [showLeaveTypeModal, setShowLeaveTypeModal] = useState(false);

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
        console.log('Leave application submitted:', { leaveType, startDate, endDate, reason });
    };

    const leaveTypes = ['Travel', 'Sick Leave', 'Personal Leave', 'Vacation'];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Center-aligned and bold title */}
                <Text style={styles.title}>Leave Request</Text>

                {/* Type of Leave Dropdown */}
                <Text style={styles.label}>Type of Leave</Text>
                <TouchableOpacity
                    onPress={() => setShowLeaveTypeModal(true)}
                    style={styles.inputContainer}
                >
                    <Text>{leaveType}</Text>
                </TouchableOpacity>

                <Modal visible={showLeaveTypeModal} transparent animationType="slide">
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <ScrollView>
                                {leaveTypes.map((type, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setLeaveType(type);
                                            setShowLeaveTypeModal(false);
                                        }}
                                        style={styles.modalItem}
                                    >
                                        <Text>{type}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                {/* Start Date Selection */}
                <Text style={styles.label}>Start Date</Text>
                <TouchableOpacity
                    onPress={() => setShowStartDatePicker(true)}
                    style={styles.inputContainer}
                >
                    <Text>{startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                </TouchableOpacity>
                {showStartDatePicker && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleStartDateChange}
                    />
                )}

                {/* End Date Selection */}
                <Text style={styles.label}>End Date</Text>
                <TouchableOpacity
                    onPress={() => setShowEndDatePicker(true)}
                    style={styles.inputContainer}
                >
                    <Text>{endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                </TouchableOpacity>
                {showEndDatePicker && (
                    <DateTimePicker
                        value={endDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleEndDateChange}
                    />
                )}

                {/* Reason Input */}
                <TextInput
                    placeholder="Reason"
                    value={reason}
                    onChangeText={setReason}
                    style={styles.reasonInput}
                    multiline={true}
                />

                {/* Submit Button */}
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Ask Leave</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <BottomNavigationBar style={styles.bottomNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
     
    },
    scrollViewContent: {
        padding: 20,
        paddingBottom: 100, // Adjust padding to prevent overlap with the navigation bar
        marginTop:100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputContainer: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    modalItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    reasonInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        marginBottom: 20,
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#2DBE60',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
    bottomNavigation: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default LeaveApplicationForm;
