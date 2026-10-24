# FieldMitra prototype

A local, fictional-data prototype for Make-a-thon 2026 Challenge 2. It is not an official census app and does not connect to government systems.

## Start

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Demo journey

1. On the dashboard, choose **Continue fieldwork**.
2. In **My Area**, add a missing building and inspect its map marker. Newly found buildings can be marked verified or flagged as not found.
3. In **Visits**, choose a fictional household and record Done, Absent, Locked, or Revisit.
4. In **Offline & Sync**, simulate offline mode, make another visit update, then reconnect and sync.
5. Review the clearly simulated self-enumeration conflict. The recommended action keeps visit history and flags the record for official-app verification.
6. Check **Progress** and **Help & Privacy**. Use **Reset demo data** before another presentation.

### Day Planner

Open **Day Planner** from the sidebar or mobile navigation. Set your date and work window, adjust visit/walking/break/buffer assumptions, choose visits, move them among schematic clusters, and mark clusters as priority. **Generate My Plan** creates a chronological schedule; marking a planned visit done updates the plan and FieldMitra progress immediately.

Changes are stored in browser local storage for this demo. The map, network status, sync, and incoming conflict are simulations. No official census answers should be entered.

## Checks

```powershell
npm test
npm run build
```
