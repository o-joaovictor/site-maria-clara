import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-stone-100">
      <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-amber-800" size={28} />
      </div>
      <h3 className="font-serif text-xl text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
