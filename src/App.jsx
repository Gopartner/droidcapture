import { useState } from 'react'
import './App.css'

const Icon = ({ name, size = 18 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    folder: <><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/><path d="M3 9h18"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.2 1-1.3 2.2-1.5-.6a7.8 7.8 0 0 1-1.5.9l-.2 1.6h-2.6l-.2-1.6a7.8 7.8 0 0 1-1.5-.9l-1.5.6-1.3-2.2 1.2-1a7 7 0 0 1 0-1.8l-1.2-1 1.3-2.2 1.5.6a7.8 7.8 0 0 1 1.5-.9l.2-1.6h2.6l.2 1.6a7.8 7.8 0 0 1 1.5.9l1.5-.6 1.3 2.2-1.2 1a7 7 0 0 1 0 1.8Z"/></>,
    usb: <><path d="M12 3v13m0-13 3 3m-3-3-3 3"/><path d="M12 16v3.5a1.5 1.5 0 0 0 3 0V17h2.5a1.5 1.5 0 0 0 0-3H15"/><circle cx="12" cy="21" r="1"/></>,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    help: <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4m0 3h.01"/></>,
    plug: <><path d="M8 7V3m8 4V3M6 7h12v4a6 6 0 0 1-12 0V7Zm6 10v4"/></>,
  }
  return <svg {...common}>{paths[name] || null}</svg>
}


export default function App() {
  const [page, setPage] = useState('Recorder')
  const [audioMode, setAudioMode] = useState('Device audio + microphone')
  const [mic, setMic] = useState('Default microphone')
  const [isRecording, setIsRecording] = useState(false)
  const [showPreview, setShowPreview] = useState(true)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark"><Icon name="monitor" size={21}/></div>
          <div className="brand-text"><strong>DroidCapture</strong><span>Android Recorder</span></div>
        </div>
        <div className="nav-label">WORKSPACE</div>
        <nav className="nav-list">
          {[
            { label: 'Recorder', icon: 'monitor' },
            { label: 'Recordings', icon: 'folder' },
            { label: 'Settings', icon: 'settings' },
          ].map(item => (
            <button key={item.label} className={`nav-item ${page === item.label ? 'active' : ''}`} onClick={() => setPage(item.label)}>
              <Icon name={item.icon}/><span>{item.label}</span>{page === item.label && <span className="nav-active-dot"/>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-row"><span className="help-icon">?</span><div><b>Need help?</b><small>Read the quick guide</small></div><Icon name="chevron" size={15}/></div>
          <div className="version-row"><span className="version-dot"/>DroidCapture <span>v0.1.0</span></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><Icon name="chevron" size={14}/><strong>{page}</strong></div>
          <div className="topbar-right"><span className="build-tag">EARLY ACCESS</span><button className="icon-button" title="Help"><Icon name="help"/></button><div className="avatar">D</div></div>
        </header>
        {page === 'Recorder' ? (
          <div className="page-content">
            <div className="page-heading"><div><h1>Screen Recorder</h1><p>Capture your Android screen directly from your desktop.</p></div><div className="session-pill"><span className="green-dot"/>Ready to start</div></div>
            <section className="device-card">
              <div className="device-card-head"><div className="section-title"><span className="section-icon"><Icon name="usb"/></span><div><h2>Android device</h2><p>Connect your phone via USB</p></div></div><button className="outline-button" onClick={() => setShowPreview(v => !v)}>{showPreview ? 'Hide preview' : 'Show preview'}</button></div>
              <div className="device-status"><div className="device-illustration"><div className="phone-frame"><div className="phone-speaker"/><div className="phone-screen"><div className="screen-glow"/><span className="phone-placeholder-icon"><Icon name="monitor" size={25}/></span><span>Device preview</span></div></div></div><div className="device-copy"><div className="status-label"><span className="status-dot disconnected"/>No device connected</div><h3>Connect your Android phone</h3><p>Plug in your phone using a USB cable and make sure USB debugging is enabled to get started.</p><button className="text-button">How to enable USB debugging <Icon name="chevron" size={14}/></button></div></div>
              {showPreview && <div className="preview-foot"><div><span className="foot-dot"/>Preview will appear here when a device is connected</div><span className="preview-resolution">— × —</span></div>}
            </section>
            <div className="settings-grid">
              <section className="panel audio-panel"><div className="panel-heading"><div><h2>Recording audio</h2><p>Choose what audio to include</p></div><span className="panel-icon"><Icon name="mic"/></span></div><div className="audio-options">
                <button className={`audio-option ${audioMode === 'Device audio only' ? 'selected' : ''}`} onClick={() => setAudioMode('Device audio only')}><span className="radio-mark"/><span className="option-content"><b>Device audio only</b><small>Capture audio from your Android device</small></span><span className="option-badge">DEVICE</span></button>
                <button className={`audio-option ${audioMode === 'Device audio + microphone' ? 'selected' : ''}`} onClick={() => setAudioMode('Device audio + microphone')}><span className="radio-mark"/><span className="option-content"><b>Device audio + microphone</b><small>Capture device sound and your voice</small></span><span className="option-badge purple">DUAL</span></button>
              </div>{audioMode === 'Device audio + microphone' && <div className="mic-select"><label>Microphone input</label><select value={mic} onChange={e => setMic(e.target.value)}><option>Default microphone</option><option>Microphone selection available when app is connected</option></select></div>}</section>
              <section className="panel output-panel"><div className="panel-heading"><div><h2>Output settings</h2><p>Recording file preferences</p></div><span className="panel-icon"><Icon name="folder"/></span></div><div className="output-field"><label>Save recordings to</label><div className="path-input"><span>📁</span><span className="path-text">Videos\DroidCapture</span><button className="browse-button">Browse</button></div></div><div className="output-field"><label>File format</label><div className="format-field"><span>MP4 video</span><span className="format-pill">H.264</span></div></div><div className="output-note">Files are saved locally on your computer.</div></section>
            </div>
            <section className="recording-bar"><div className="record-status"><span className={`record-dot ${isRecording ? 'live' : ''}`}/><div><b>{isRecording ? 'Recording in progress' : 'Ready to record'}</b><small>{isRecording ? 'Recording controls are in demo mode' : 'Your recording will start once a device is connected'}</small></div></div><div className="record-controls"><div className="timer"><Icon name="clock" size={16}/><span>{isRecording ? '00:00:01' : '00:00:00'}</span></div><button className={`record-button ${isRecording ? 'stop' : ''}`} onClick={() => setIsRecording(v => !v)}><span/>{isRecording ? 'Stop recording' : 'Start recording'}</button></div></section>
            <footer className="footer-note">DroidCapture is in early development <span>•</span> Capture engine not connected yet</footer>
          </div>
        ) : <div className="placeholder-page"><div className="placeholder-icon"><Icon name={page === 'Recordings' ? 'folder' : 'settings'} size={30}/></div><h1>{page}</h1><p>{page === 'Recordings' ? 'Your captured videos will be listed here.' : 'Application preferences will be available here.'}</p><span className="coming-soon">COMING IN A FUTURE UPDATE</span><button className="back-button" onClick={() => setPage('Recorder')}>Back to Recorder</button></div>}
      </main>
    </div>
  )
}
