
import React, { useState } from 'react';
import { MOCK_POSTS } from '../../constants';
import { Post } from '../../types';

const ManageBlog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<Post | null>(null);

    const handleOpenForm = (post: Post | null) => {
        setEditingPost(post);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingPost(null);
    };

    const handleSave = (postData: Post) => {
        if (editingPost) {
            setPosts(posts.map(p => p.id === postData.id ? postData : p));
        } else {
            const newPost = { ...postData, id: Date.now(), slug: postData.title.toLowerCase().replace(/\s+/g, '-') };
            setPosts([newPost, ...posts]);
        }
        handleCloseForm();
    };
    
    return (
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Blog Posts</h1>
                <button onClick={() => handleOpenForm(null)} className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] rounded-lg">
                    Create New Post
                </button>
            </div>
            
            {/* Post List */}
            <div className="space-y-4">
                {posts.map(post => (
                    <div key={post.id} className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg">
                        <div>
                            <h3 className="font-bold">{post.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                        </div>
                        <div className="space-x-2">
                            <button onClick={() => handleOpenForm(post)} className="px-3 py-1 text-sm bg-blue-500 text-white rounded">Edit</button>
                            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form Modal */}
            {isFormOpen && <PostForm post={editingPost} onSave={handleSave} onClose={handleCloseForm} />}
        </div>
    );
};

interface PostFormProps {
    post: Post | null;
    onSave: (post: Post) => void;
    onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSave, onClose }) => {
    const [formData, setFormData] = useState<Omit<Post, 'id' | 'slug'>>({
        title: post?.title || '',
        excerpt: post?.excerpt || '',
        content: post?.content || '',
        imageUrl: post?.imageUrl || 'https://picsum.photos/800/400',
        author: post?.author || 'A. U. Thor',
        date: post?.date || new Date().toISOString().split('T')[0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: post?.id || 0, slug: post?.slug || '' });
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">{post ? 'Edit Post' : 'Create New Post'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField label="Title" name="title" value={formData.title} onChange={handleChange} />
                    <InputField label="Excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} type="textarea" />
                    <InputField label="Content (HTML)" name="content" value={formData.content} onChange={handleChange} type="textarea" rows={10} />
                    <InputField label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                    
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg">Cancel</button>
                        <button type="submit" className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] rounded-lg">Save Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text', rows = 3 }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>
        {type === 'textarea' ? (
            <textarea id={name} name={name} value={value} onChange={onChange} rows={rows} className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-md" />
        ) : (
            <input id={name} name={name} type={type} value={value} onChange={onChange} className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-md" />
        )}
    </div>
);


export default ManageBlog;
