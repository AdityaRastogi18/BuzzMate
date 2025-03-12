import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import {
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import DateTimePicker from "@react-native-community/datetimepicker";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: null, // Changed to null for better handling
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  // Handle input changes
  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Handle Signup submission
  const handleSignup = () => {
    if (
      !form.username.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18);
    if (form.dob && form.dob > minDate) {
      alert("You must be at least 18 years old to sign up.");
      return;
    }

    console.log("Signing up with:", form);
    // TODO: Implement authentication logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-6 bg-gray-900">
        {/* Header */}
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Create a new account
        </Text>

        {/* Input Fields */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Username Input */}
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg mb-4"
            placeholder="Enter your name"
            placeholderTextColor="#bbb"
            autoCapitalize="words"
            value={form.username}
            onChangeText={(value) => handleChange("username", value)}
          />

          {/* Email Input */}
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg mb-4"
            placeholder="Enter your email"
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(value) => handleChange("email", value)}
          />

          {/* Date of Birth Input */}
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="bg-gray-800 p-4 rounded-lg mb-4 flex-row justify-between items-center"
          >
            {form.dob ? (
              <Text className="text-white">{form?.dob?.toDateString()}</Text>
            ) : (
              <Text className="text-[#bbb]">Enter date of birth</Text>
            )}
            {form.dob && (
              <TouchableOpacity onPress={() => handleChange("dob", null)}>
                <XMarkIcon size={18} color="#bbb" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={
                form.dob ||
                new Date(new Date().setFullYear(new Date().getFullYear() - 18))
              }
              mode="date"
              display="calendar"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (event.type === "set" && selectedDate) {
                  handleChange("dob", selectedDate);
                }
              }}
              maximumDate={
                new Date(new Date().setFullYear(new Date().getFullYear() - 18))
              } // Ensures 18+ age
            />
          )}

          {/* Password Input with Toggle */}
          <View className="flex-row items-center bg-gray-800 rounded-lg mb-4">
            <TextInput
              className="flex-1 text-white p-4 rounded-lg"
              placeholder="Password"
              placeholderTextColor="#bbb"
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={(value) => handleChange("password", value)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="p-4"
            >
              {showPassword ? (
                <EyeSlashIcon size={20} color="#bbb" />
              ) : (
                <EyeIcon size={20} color="#bbb" />
              )}
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View className="flex-row items-center bg-gray-800 rounded-lg mb-4">
            <TextInput
              className="flex-1 text-white p-4 rounded-lg"
              placeholder="Re-enter your password"
              placeholderTextColor="#bbb"
              secureTextEntry={!showConfirmPassword}
              value={form.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="p-4"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon size={20} color="#bbb" />
              ) : (
                <EyeIcon size={20} color="#bbb" />
              )}
            </TouchableOpacity>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleSignup}
            className="bg-blue-600 rounded-lg p-4 mb-4"
          >
            <Text className="text-white text-center text-lg font-semibold">
              Signup
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-md">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text className="text-blue-500 text-md font-bold ml-1">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
