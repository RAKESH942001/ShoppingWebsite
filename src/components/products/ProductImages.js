import React from 'react';

// Todo1:img width and height value should from config.
// Todo2:Delete the className .

const ProductImages = (context) => {
	const { data: { img }} = context;

	return (
		<div
			className="productImg"
			style={ {
				top: '25%',
				left: '10%',
			} }
		>
			<img
				src={ img }
				alt="images"
				width="220px"
				height="200px"
			/></div>);
};

export default ProductImages;
