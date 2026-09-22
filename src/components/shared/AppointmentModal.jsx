import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Calendar, Clock, MapPin, Stethoscope, CheckCircle2, User, Phone, Mail } from 'lucide-react';
import { HOSPITALS_DATA } from '../../constants/config';

export const AppointmentModal = ({ isOpen, onClose, defaultSpecialty = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hospital: 'ahmedabad',
    specialty: defaultSpecialty || 'Cardiology',
    preferredDate: '',
    preferredTime: 'morning',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? 'Appointment Confirmed!' : 'Book Doctor Consultation'}
      maxWidth="max-w-xl"
    >
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-[#003B73] mb-2">Thank You, {formData.name || 'Patient'}!</h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Your appointment request for <strong className="text-slate-800">{formData.specialty}</strong> at{' '}
            <strong className="text-slate-800">{HOSPITALS_DATA.find(h => h.id === formData.hospital)?.name || 'Marengo Hospital'}</strong> has been registered.
            Our care coordinator will call you at <strong className="text-slate-800">{formData.phone}</strong> within 15 minutes to confirm your slot.
          </p>
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-xs text-sky-800 text-left mb-6">
            <div className="font-bold mb-1">Appointment Reference: #MRG-{Math.floor(100000 + Math.random() * 900000)}</div>
            <div>Emergency 24x7 Helpline: <strong>1066</strong></div>
          </div>
          <Button variant="primary" onClick={handleReset} className="w-full sm:w-auto">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Select Hospital *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7] bg-white"
                >
                  {HOSPITALS_DATA.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name} ({h.city})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Specialty / Department *
              </label>
              <div className="relative">
                <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7] bg-white"
                >
                  <option value="Cardiology">Cardiac Sciences (Cardiology)</option>
                  <option value="Neuro Sciences">Neuro Sciences & Spine</option>
                  <option value="Oncology">Oncology (Cancer Care)</option>
                  <option value="Orthopaedics">Orthopaedics & Joint Replacement</option>
                  <option value="Gastroenterology">Gastroenterology & HPB</option>
                  <option value="Renal Sciences">Renal Sciences & Urology</option>
                  <option value="Mother & Child">Mother & Child / Obstetrics</option>
                  <option value="General Health">General Medicine & Health Check</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7] bg-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Medical Concern or Symptoms (Optional)
            </label>
            <textarea
              rows="2"
              placeholder="Briefly describe your symptoms or reason for visit..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <Button variant="accent" type="submit" className="w-full sm:w-auto">
              Confirm & Book Appointment
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default AppointmentModal;
