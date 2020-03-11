const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    _id: { type: String },
    url: { type: String, required: true },
    hits: { type: Number, default: 0 }
}, {
    timestamps: true,
    collection: 'links'
});

module.exports = mongoose.model('LinkModel', LinkSchema);