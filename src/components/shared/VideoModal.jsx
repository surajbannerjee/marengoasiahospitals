import React from 'react';
import { Modal } from '../common/Modal';
import { Play } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, story }) => {
  if (!story) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Patient Recovery Story - ${story.patientName}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-4">
        {/* Mock Video Container */}
        <div className="relative aspect-video w-full bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center shadow-inner">
          <img
            src={story.image}
            alt={story.patientName}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-[#F37023] text-white flex items-center justify-center shadow-lg animate-pulse">
                <Play className="w-6 h-6 fill-white translate-x-0.5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{story.treatment}</h4>
                <p className="text-slate-300 text-xs">{story.doctor}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <p className="text-sm italic text-slate-700 leading-relaxed">
            {story.quote}
          </p>
          <div className="mt-3 text-xs text-slate-500 font-medium">
            Location: <span className="text-slate-800">{story.location}</span> • Verified Clinical Outcome
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
