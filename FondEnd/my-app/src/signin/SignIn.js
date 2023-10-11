import React, { useState } from 'react'
import './SignIn.css'
import { Checkbox, Form, Input } from 'antd';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, app } from '../firebase';
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/userSlice';
import { setLocalStorage } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore, where, query, getDocs } from 'firebase/firestore';

function SignIn() {
	// hàm hiển thị password
	const onFinish = (values) => {
		// console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		// console.log('Failed:', errorInfo);
	};

	const db = getFirestore(app)
	const useRef = collection(db, 'User')

	// hàm Sign up
	const [signUpInfo, setSignUpInfo] = useState({ username: '', email: '', password: '', confirmPassword: '' })
	const handleInputSignup = (e) => {
		setSignUpInfo((signUpInfo) => ({ ...signUpInfo, [e.target.name]: e.target.value }))
	}

	const handleSignUp = (useRef, signUpInfo) => {
		if (signUpInfo.password === signUpInfo.confirmPassword && signUpInfo.password.length >= 8) {
			addDoc(useRef, signUpInfo)
				.then((useRef) => {
					alert("Successful registration, continue to log in to shop");
					// navigate('/trangchu')
				})
				.catch(error => {
					console.log(error);
				})
				setSignUpInfo('')
			return;
		}
		alert('Passwords is not the same or Password length is not enough  ')
	}

	// hàm login
	const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })

	const handleInputSignIn = (e) => {
		setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
	}

	const handleSignIn = async (loginInfo) => {
		const { email, password } = loginInfo;
		let flag = false;
		const q = query(
			useRef,
			where("email", "==", email),
			where("password", "==", password)
		);

		const docSnap = await getDocs(q);
		docSnap.forEach((doc) => {
			if (doc.data()) {
				flag = true;
				setLocalStorage('chatapp', 'signinmanual')
				navigate('/trangchu')
				// console.log(doc.data());
			}
		});
		if (!flag)
			alert("Username or Password is wrong");

		// setNotify({...notify,show :true,message:'Username or Password is wrong'})
	}



	// đăng nhập bằng gg
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLoginGoogle = async () => {
		const ggProvider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auth, ggProvider);
			const { email, displayName, photoURL } = result.user;
			dispatch(updateUser({ email, displayName, photoURL }))
			setLocalStorage('login', { email, displayName, photoURL })
			navigate('/trangchu')
		}
		catch (e) {
			alert("Error")
		}
	}

	return (
		<div id="signin_body">

			<div className="main">
				<input type="checkbox" id="chk" aria-hidden="true" />
				<div className="signup">
					<label htmlFor="chk" aria-hidden="true" style={{ color: '#573b8a' }}>Sign up</label>
					<Form
						name="basic"
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						style={{
							maxWidth: 400,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							rules={[
								{
									required: true,
									message: 'Please input your username!',
								},
							]}

						>
							<Input
								style={{
									maxWidth: 230,
									marginLeft: 70,
									height: 45,
								}}
								type="text"
								name="username"
								placeholder="Username"
								value={signUpInfo.username}
								onChange={handleInputSignup}
							/>
						</Form.Item>

						<Form.Item
							rules={[
								{
									required: true,
									message: 'Please input your username!',
								},
							]}
						>
							<Input
								style={{
									maxWidth: 230,
									marginLeft: 70,
									height: 45,
								}}
								type="email"
								name="email"
								placeholder="Email"
								value={signUpInfo.email}
								onChange={handleInputSignup}
							/>
						</Form.Item>


						<Form.Item
							rules={[
								{
									required: true,
									message: 'Please input your password!Password length over 8 characte',
								},
							]}
						>
							<Input.Password style={{
								maxWidth: 230,
								marginLeft: 70,
								height: 45,
							}}
								name="password"
								placeholder="Password"
								type="password"
								value={signUpInfo.password}
								onChange={handleInputSignup}
							/>
						</Form.Item>
						<Form.Item
							rules={[
								{
									required: true,
									message: 'Please input your Confirm Password!Password length over 8 characte',
								},
							]}
						>
							<Input.Password style={{
								maxWidth: 230,
								marginLeft: 70,
								height: 45,
							}}
								name="confirmPassword"
								placeholder="Confirm Password"
								type="password"
								value={signUpInfo.confirmPassword}
								onChange={handleInputSignup}
							/>
						</Form.Item>

						<button style={{ marginTop: '5px' }} onClick={() => handleSignUp(useRef, signUpInfo)}>Sign up</button>



					</Form>
				</div>

				<div className="login">
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<Form

						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						style={{
							maxWidth: 400,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>

						<Form.Item
							rules={[
								{
									required: true,
									message: 'Please input your email!',
								},
							]}
						>
							<Input
								style={{
									maxWidth: 230,
									marginLeft: 70,
									height: 45,
								}}
								type="email"
								name="email"
								placeholder="Email"
								value={loginInfo.email}
								onChange={handleInputSignIn} />
						</Form.Item>

						<Form.Item

							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password style={{
								maxWidth: 230,
								marginLeft: 70,
								height: 45,
							}}
								name="password"
								placeholder="Password"
								type="password"
								value={loginInfo.password}
								onChange={handleInputSignIn}

							/>
						</Form.Item>

						<Form.Item
							name="remember"
							style={{ margin: '0', }}
							valuePropName="checked"
							wrapperCol={{
								offset: 5,
								span: 16,
							}}
						>
							<Checkbox style={{ color: 'black' }} >Remember me</Checkbox>
						</Form.Item>
						<button style={{ marginTop: '5px' }} onClick={() => handleSignIn(loginInfo)}>Login</button>

						<p style={{ textAlign: 'center', marginBottom: '5px' }}>or</p>
						<div>
							<button className='btnSignIn' onClick={handleLoginGoogle} >

								<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png' className="img-fluid" alt='' style={{ width: '25px', }} />&nbsp;
								<span> Login with Google</span>
							</button>
						</div>
					</Form>

				</div>
			</div>

		</div>


	)

}


export default SignIn
