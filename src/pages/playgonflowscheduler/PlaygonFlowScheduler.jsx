import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate: "2021-06-01",
      days: 31,
      scale: "Day",
      timeHeaders: [
        {groupBy: "Month"},
        {groupBy: "Day", format: "d"}
      ],
      cellWidthSpec: "Auto",
      cellWidth: 50,
      durationBarVisible: false,
      treeEnabled: true,
      rowHeaderColumns: [
        {name: "Tournaments"},
        {name: "Capacity", display: "Capacity", width: 90},
        {name: "Spots", display: "Spots", width: 90},
        {name: "Prize", display: "Prize", width: 90},
      ],
      resources: [
        {
          name: "Epic Games", id: "G2", expanded: true, children: [
            {name: "Apex", Capacity: 4, Spots: 2, Prize: "200", id: "A"},
            {name: "Call of Duty", Capacity: 4, Spots: 2, Prize: "200", id: "B"},
            {name: "League of Legends", Capacity: 4, Spots: 2, Prize: "100", id: "C"},
            {name: "Minecraft", Capacity: 2, Spots: 2, Prize: "100", id: "D"},
          ]
        },
        {
          name: "EASports", id: "G2", expanded: true, children: [
            {name: "NBA2k23", Capacity: 4, Spots: 2, Prize: "30", id: "A"},
            {name: "FIFA 2023", Capacity: 4, Spots: 2, Prize: "50", id: "B"},
            {name: "GTA", Capacity: 4, Spots: 2, Prize: "10", id: "C"},
            {name: "NFL2023", Capacity: 2, Spots: 2, Prize: "15", id: "D"},
          ]
        },
        {
          name: "SuperCell", id: "G1", expanded: true, children: [
            {name: "Clash Royale", Capacity: 5, Spots: 4, Prize: "5", id: "E"},
            {name: "brawl Stars", Capacity: 5, Spots: 4, Prize: "5", id: "F"},
            {name: "Clash Of Clans", Capacity: 5, Spots: 4, Prize: "3", id: "G"},
          ]
        },
      ],
      events: [
        {id: 101, text: "Reservation 101", start: "2021-06-02T00:00:00", end: "2021-06-05T00:00:00", resource: "A"},
        {id: 102, text: "Reservation 102", start: "2021-06-06T00:00:00", end: "2021-06-10T00:00:00", resource: "A"},
        {
          id: 103,
          text: "Reservation 103",
          start: "2021-06-03T00:00:00",
          end: "2021-06-10T00:00:00",
          resource: "C",
          backColor: "#6fa8dc",
          locked: true
        },
        {
          id: 104,
          text: "Reservation 104",
          start: "2021-06-02T00:00:00",
          end: "2021-06-08T00:00:00",
          resource: "E",
          backColor: "#f6b26b",
          plus: true
        },
        {
          id: 105,
          text: "Reservation 105",
          start: "2021-06-03T00:00:00",
          end: "2021-06-09T00:00:00",
          resource: "G",
        },
        {
          id: 106,
          text: "Reservation 106",
          start: "2021-06-02T00:00:00",
          end: "2021-06-07T00:00:00",
          resource: "B",
        }
      ],
      onBeforeEventRender: args => {
        if (!args.data.backColor) {
          args.data.backColor = "#93c47d";
        }
        args.data.borderColor = "darker";
        args.data.fontColor = "white";

        args.data.areas = [];
        if (args.data.locked) {
          args.data.areas.push(
            {
              right: 4,
              top: 8,
              height: 18,
              width: 18,
              symbol: "icons/daypilot.svg#padlock",
              fontColor: "white"
            }
          );
        }
        else if (args.data.plus) {
          args.data.areas.push(
            {
              right: 4,
              top: 8,
              height: 18,
              width: 18,
              symbol: "icons/daypilot.svg#plus-4",
              fontColor: "white"
            }
          );
        }
      },
    };
  }

  zoomChange(args) {
    switch (args.level) {
      case "month":
        this.setState({
          startDate: new DayPilot.Date("2021-06-01").firstDayOfMonth(),
          days: new DayPilot.Date("2021-06-01").daysInMonth(),
          scale: "Day"
        });
        break;
      case "week":
        this.setState({
          startDate: new DayPilot.Date("2021-06-01").firstDayOfWeek(),
          days: 7,
          scale: "Day"
        });
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  }

  cellWidthChange(ev) {
    const checked = ev.target.checked;
    this.setState({
      cellWidthSpec: checked ? "Auto" : "Fixed"
    });
  }

  render() {
    const {...config} = this.state;
    return (
      <div>

        <div className="toolbar">
          <Zoom onChange={args => this.zoomChange(args)}/>
          <button onClick={ev => this.scheduler.message("Welcome!")}>Welcome!</button>
          <span className="toolbar-item"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"}
                onChange={ev => this.cellWidthChange(ev)}/> Auto width</label></span>
        </div>

        <DayPilotScheduler
          {...config}
          onEventMoved={args => {
            console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
            this.scheduler.message("Event moved: " + args.e.data.text);
          }}
          onEventResized={args => {
            console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
            this.scheduler.message("Event resized: " + args.e.data.text);
          }}
          onTimeRangeSelected={args => {
            DayPilot.Modal.prompt("New event name", "Event").then(modal => {
              this.scheduler.clearSelection();
              if (!modal.result) {
                return;
              }
              this.scheduler.events.add({
                id: DayPilot.guid(),
                text: modal.result,
                start: args.start,
                end: args.end,
                resource: args.resource
              });
            });
          }}
          ref={component => {
            this.scheduler = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Scheduler;