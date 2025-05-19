import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddRecipe() {
    const [recipeName, setRecipeName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [steps, setSteps] = useState("");
    const [image, setImage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('steps', steps);
        formData.append('image', image);
    
        try {
            const res = await fetch('https://recipe-book-backend-2yg9.onrender.com/add', {
                method: 'POST',
                body: formData,
            });
    
            const data = await res.json();
            console.log(data);
    
            setRecipeName("");
            setAuthor("");
            setDescription("");
            setSteps("");
            setImage(null);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };
    
    return (
        <>
            <div className="min-h-screen bg-orange-50">
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-orange-50 p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl space-y-6 border-t-8 border-orange-400"
                    >
                        <h2 className="text-3xl font-bold text-orange-400 text-center">
                            🍳 Add Your Recipe
                        </h2>
                        <div>
                            <label className="block text-orange-400 font-semibold mb-1">Recipe Name</label>
                            <input
                                type="text"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                                placeholder="e.g. Spaghetti Carbonara"
                                className="w-full p-3 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-orange-400 font-semibold mb-1">Author Name</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="Your Name"
                                className="w-full p-3 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-orange-400 font-semibold ">Recipe Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="4"
                                placeholder="Describe your recipe in detail..."
                                className="w-full p-3 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-orange-400 font-semibold mb-1">Recipe Steps</label>
                            <textarea
                                value={steps}
                                onChange={(e) => setSteps(e.target.value)}
                                rows="4"
                                placeholder="Describe your recipe steps here"
                                className="w-full p-3 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-orange-400 font-semibold mb-1">Upload Recipe Image</label>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="w-full p-2 rounded-md border border-orange-300 bg-orange-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-400 file:text-white hover:file:bg-orange-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 cursor-pointer"
                        >
                            Upload Recipe
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AddRecipe;