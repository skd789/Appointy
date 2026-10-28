import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    const cloudName = process.env.CLOUDINARY_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_SECRET_KEY;

    const hasRealCloudinaryCreds =
        cloudName &&
        apiKey &&
        apiSecret &&
        !cloudName.includes('your_') &&
        !apiKey.includes('your_') &&
        !apiSecret.includes('your_');

    if (!hasRealCloudinaryCreds) {
        return;
    }

    cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret
    });

}

export default connectCloudinary;