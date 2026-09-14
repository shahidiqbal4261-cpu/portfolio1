import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShieldHalved, faCheck, faWallet, faLock } from "@fortawesome/free-solid-svg-icons";

const PaymentGatewayVisual = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-4 sm:p-5 flex items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-700 select-none">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl"></div>

      <div className="relative z-10 w-[46%] h-full bg-slate-900 border border-slate-700/80 rounded-xl p-2.5 flex flex-col justify-between shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1 text-[9px]">
          <span className="font-bold text-sky-300 flex items-center gap-1">
            <FontAwesomeIcon icon={faCreditCard} className="text-sky-400" /> Xmoney Checkout
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[8px] border border-sky-500/30 flex items-center gap-0.5">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[7px]" /> Encrypted
          </span>
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-700 rounded-lg p-2 text-white shadow-md my-1">
          <div className="flex items-center justify-between text-[8px] mb-2 opacity-90">
            <span className="font-semibold tracking-wider">XMONEY PAY</span>
            <FontAwesomeIcon icon={faWallet} className="text-[9px]" />
          </div>
          <p className="font-mono text-[9px] tracking-widest font-bold">•••• •••• •••• 4261</p>
          <div className="flex items-center justify-between text-[7px] mt-1.5 opacity-80">
            <span>SHAHID IQBAL</span>
            <span>12/28</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[8px] text-slate-400">
          <span className="text-slate-300 font-medium">Card &amp; Wallet</span>
          <span className="text-sky-400 font-bold flex items-center gap-0.5">
            <FontAwesomeIcon icon={faLock} className="text-[7px]" /> SSL 256-bit
          </span>
        </div>
      </div>

      <div className="relative z-10 w-[50%] h-full bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between shadow-2xl font-mono text-[9px] transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 mb-1.5">
          <span className="text-[9px] font-bold text-slate-200">Xmoney Payment API</span>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
            v1.2 Active
          </span>
        </div>

        <div className="space-y-1 font-mono text-[8px] leading-tight text-slate-300">
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-sky-400 font-bold">POST /xmoney/payment/charge</span>
            <span className="text-sky-300 font-semibold">200 OK</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-slate-300">Auth Token Validation</span>
            <span className="text-sky-300 font-semibold">Verified</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-slate-300">Booking Status Confirmation</span>
            <span className="text-sky-300 font-semibold">Confirmed</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
          <span className="text-sky-400 font-semibold flex items-center gap-1">
            <FontAwesomeIcon icon={faCheck} className="text-[9px]" /> Transaction Confirmed
          </span>
          <span className="text-sky-300 font-bold">Instant Callback</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayVisual;
