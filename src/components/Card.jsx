import React from 'react';
import { useDispatch } from 'react-redux'
import { filterAction } from '../redux/blogs/actions';

const Card = ({ blog }) => {
    const { title, image, category, author, authorAvatar, createdAt, readtAt } = blog;
    const dispatch = useDispatch();

    const handleFilter = (filterBy, value) => {
        dispatch(filterAction(filterBy, value));
    }
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={image}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p onClick={() => handleFilter('category', category)} className="text-sm font-medium text-indigo-600 cursor-pointer">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#/" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div onClick={() => handleFilter('author', author)} className="flex-shrink-0 cursor-pointer">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={authorAvatar}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            onClick={() => handleFilter('author', author)}
                            className="text-sm font-medium text-gray-900 hover:underline text-left cursor-pointer">
                            {author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500 text-left"
                        >
                            <time dateTime="2020-03-16">
                                {createdAt}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {readtAt} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;