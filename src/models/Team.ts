import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  players: [{
    playerId: Number,
    slot: Number
  }],
  totalPoints: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

export default mongoose.models.Team || mongoose.model('Team', TeamSchema);
