import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import '../App.css';

const Modal = ({ isOpen, onClose, recipe }) => {
    if (!isOpen || !recipe) return null;    
    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-orange-50 p-6 rounded-lg w-1/3 border border-transparent shadow-2xl">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Recipe Details</h3>
                <p><strong>Recipe Name:</strong> {recipe.name}</p>
                <p><strong>Author:</strong> {recipe.author}</p>
                <hr className="my-2" />
                <p><strong>Steps:</strong> {recipe.steps}</p>
                <div className="mt-4 text-right">
                    <button
                        onClick={onClose}
                        className="bg-orange-400 text-white p-3 rounded-lg font-bold w-[100px]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch('http://localhost:5000/');

                const contentType = res.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await res.json();
                    setRecipes(data);
                    console.log("Fetched recipes:", data);
                } else {
                    console.error("Response not in JSON format");
                }
            } catch (err) {
                console.error("Error fetching recipes:", err);
            }
        };

        fetchRecipes();
    }, []);

    const handleSearch = () => {
        console.log('Search triggered:', searchQuery);
    };

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-orange-50 min-h-screen'>
            <Navbar />
            <Searchbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
            />
            <div className='container mx-auto p-6'>
                <h2 className='text-2xl font-bold text-orange-400 mb-6 text-center'>Featured Recipes</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {filteredRecipes.map((recipe, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg p-4 border border-orange-300 h-[370px] flex flex-col justify-between'>
                            <div className='h-40 bg-orange-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden'>
                                {recipe.image_url && (
                                    <img
                                        src={`http://localhost:5000${recipe.image_url}`}
                                        alt={recipe.name}
                                        className="object-cover h-full w-full rounded-lg"
                                    />
                                )}
                            </div>
                            <h3 className='text-lg font-semibold text-orange-400 truncate'>{recipe.name}</h3>
                            <p className='text-sm text-gray-500 italic mb-1 truncate'>By {recipe.author}</p>
                            <div className='text-gray-600 text-sm overflow-y-auto hide-scrollbar mb-3' style={{ maxHeight: '60px' }}>
                                {recipe.description}
                            </div>
                            <button
                                onClick={() => openModal(recipe)}
                                className="mt-2 bg-gradient-to-r from-orange-300 to-orange-400 text-white p-2 rounded-lg hover:bg-orange-500"
                            >
                                View Recipe
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} recipe={selectedRecipe} />
        </div>
    );
};
export default Home;
