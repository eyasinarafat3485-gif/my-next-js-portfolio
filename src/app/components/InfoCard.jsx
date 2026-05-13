import { Mail, MapPin, Phone } from 'lucide-react';

const InfoCard = () => {
    return (
        <div className="flex flex-col gap-6 order-1 lg:order-2">
             {/* Phone Card */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 dark:bg-slate-500/70 p-3 rounded-full mb-4">
                <Phone className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-orange-500 mb-2">Phone</h3>
              <p className="text-gray-500 dark:text-white/75 text-sm leading-relaxed">
                +880 1304 513475 <br />
                +880 1960 421858 <br />
              </p>
              
              <div className="flex items-center mx-auto gap-2 text-xs font-medium pt-2">
                <span className="w-[8px] h-[8px] rounded-full bg-blue-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                <p className='text-gray-500 dark:text-white/75 leading-relaxed text-xs font-medium'> Available 9am - 10pm </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 dark:bg-slate-500/70 p-3 rounded-full mb-4">
                <Mail className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-orange-500 mb-2">Email</h3>
              <p className="text-gray-500 dark:text-white/75 text-sm leading-relaxed">
                eyasinwebdev@gmail.com <br />
              </p>

              <div className="flex items-center mx-auto gap-2 text-xs font-medium pt-2">
                <span className="w-[8px] h-[8px] rounded-full bg-orange-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                <p className='text-gray-500 dark:text-white/75 leading-relaxed text-xs font-medium'> Reply within 24 hours </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 dark:bg-slate-500/70 p-3 rounded-full mb-4">
                <MapPin className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-orange-500 mb-2">Location</h3>
              <p className="text-gray-500 dark:text-white/75 text-sm leading-relaxed">
                Mymenshing, Bangladesh <br />
              </p>

              <div className="flex items-center mx-auto gap-2 text-xs font-medium pt-2">
                <span className="w-[8px] h-[8px] rounded-full bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                <p className='text-gray-500 dark:text-white/75 leading-relaxed text-xs font-medium'>Available for work</p>
              </div>
            </div>
        </div>
    );
};

export default InfoCard;