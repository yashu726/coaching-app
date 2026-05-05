import { useState } from "react"

// UI Components
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// Icons
import { User, Mail, Lock, Phone } from "lucide-react"

const Login = () => {

   // STATE
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  })

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  // HANDLER
  const handleChange = (e, type) => {
    const { name, value } = e.target

    if (type === "signup") {
      setSignupData({ ...signupData, [name]: value })
    } else {
      setLoginData({ ...loginData, [name]: value })
    }
  }

  const handleRegistration = (type) => {
    const inputData = type === "signup" ? signupData : loginData;
    console.log(inputData);
  }

  // LOGIN SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}

    if (!loginData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Invalid email"
    }

    if (!loginData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Login Data:", loginData)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            {/* Tabs Header */}
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Signup</TabsTrigger>
              <TabsTrigger value="password">Login</TabsTrigger>
            </TabsList>

            {/*  SIGNUP  */}
            <TabsContent value="account" className="mt-4">

              <CardHeader className="px-0 text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <User className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-2xl font-bold">
                    Create Account
                  </CardTitle>
                </div>
                <CardDescription>
                  Enter your details below to create your account
                </CardDescription>
              </CardHeader>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label>Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input 
                    className="pl-10 h-11" 
                    name="name"
                    value={signupData.name}
                    onChange={(e) => handleChange(e, "signup")} 
                    placeholder="Enter your name" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input 
                    name="email"
                    value={signupData.email} 
                    className="pl-10 h-11" 
                    onChange={(e)=> handleChange(e, "signup")} 
                    placeholder="Enter your email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Mobile</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input 
                    className="pl-10 h-11" 
                    name="mobile"
                    value={signupData.mobile}
                    onChange={(e)=> handleChange(e, "signup")} 
                    placeholder="Enter mobile number" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input 
                    type="password" 
                    name="password"
                    value={signupData.password}
                    onChange={(e)=> handleChange(e, "signup")} 
                    className="pl-10 h-11" 
                    placeholder="Enter your password" />
                  </div>
                </div>
                <Button onClick={()=> handleRegistration("signup")} className="w-full h-11 text-base">
                  Create Account
                </Button>

              </div>
            </TabsContent>

            {/*  LOGIN  */}
            <TabsContent value="password" className="mt-4">
              <CardHeader className="px-0 text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Lock className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-2xl font-bold">
                    Login
                  </CardTitle>
                </div>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                     type="email"
                     name="email"
                     value={loginData.email}
                     onChange={(e) => handleChange(e, "login")}
                     className="pl-10 h-11"
                     placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      type="password" 
                      name="password"
                      value={loginData.password}
                      onChange={(e) => handleChange(e, "login")}
                      className="pl-10 h-11"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <Button onClick={()=> handleRegistration("login")} type="submit" className="w-full h-11">
                  Login
                </Button>

              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

    </div>
  )
}
export default Login