import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GoGiFa from "./GoGiFa";
import { AuthContext } from "../Provider/AuthProvider";
const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;

const SignUp = () => {

    const { createUserForEmailPassLogin, updateUserProfile, logOut } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        createUserForEmailPassLogin(data.email, data.password)

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photo)
                    .then((imgResponse) => {
                        const imgURL = imgResponse.data.display_url;
                        const userSaved = { name: data.name, email: data.email, image: imgURL }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userSaved)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                }
                            })
                        logOut()
                            .then(() => { })
                            .catch(error => console.log(error))
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='py-24 md:w-1/2 md:h-screen mx-auto rounded-xl border-2 my-10 shadow-xl'>
                <h1 className='text-2xl font-bold text-center uppercase'>Create an Account</h1>
                <h1 className='text-sm mt-2 text-center'>Not have an account? Create your account. Its take less then a minutes</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="my-10 mx-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <br />
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered w-11/12 my-2 border-2 p-2 rounded-lg" />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <br />
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered w-11/12 my-2 border-2 p-2 rounded-lg" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <br />
                        <input type="file" {...register("image", { required: true })} className=" file-input file-input-bordered w-96 my-4" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]+$/ })} placeholder="password" className="input input-bordered w-11/12 my-2 border-2 p-2 rounded-lg" />
                        {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500">password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500">password must have a Capital letter & a Special Charecter</p>}
                    </div>
                    <div className="form-control mt-6">
                        <motion.div className="box"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                            <input className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-800 border-none w-11/12" type="submit" value="Sign Up" />
                        </motion.div>
                    </div>
                    <div className="mr-12 mt-2">
                        <GoGiFa></GoGiFa>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;