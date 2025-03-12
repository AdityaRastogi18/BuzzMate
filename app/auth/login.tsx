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
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Handle input changes
  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Handle login submission
  const handleLogin = () => {
    if (!form.username.trim() || !form.password.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", form);
    // TODO: Implement authentication logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-6 bg-gray-900">
        {/* Header */}
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </Text>

        {/* Input Fields */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Username Input */}
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg mb-4"
            placeholder="Email or Username"
            placeholderTextColor="#bbb"
            autoCapitalize="none"
            value={form.username}
            onChangeText={(value) => handleChange("username", value)}
          />

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

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-600 rounded-lg p-4 mb-4"
          >
            <Text className="text-white text-center text-lg font-semibold">
              Login
            </Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity
            onPress={() => router.push("/auth/forgot-password")}
          >
            <Text className="text-red-500 text-center text-sm">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-md">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/signup")}>
              <Text className="text-blue-500 text-md font-bold ml-1">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
