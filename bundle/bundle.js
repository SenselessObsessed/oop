(()=>{var e={44:e=>{class t{constructor(e,t,s,r=null){if(e.length<2||e.lenght>10)throw new Error("Имя должно быть от 2 до 10 символов");this.name=e,this.type=r,this.health=100,this.level=1,this.attack=t,this.defence=s}levelUp(){if(this.health<=0)throw new Error("Нельзя повысить уровень умершего");this.level+=1,this.attack*=1.2,this.defence*=1.2,this.health=100}damage(e){this.health>0&&(this.health-=e*(1-this.defence/100))}}e.exports={Charapter:t,Bowerman:class extends t{constructor(e){super(e,25,25,"Bowman")}},Swordsman:class extends t{constructor(e){super(e,40,10,"Swordsman")}},Magician:class extends t{constructor(e){super(e,10,40,"Magician")}},Daemon:class extends t{constructor(e){super(e,10,40,"Daemon")}},Undead:class extends t{constructor(e){super(e,25,25,"Undead")}},Zombie:class extends t{constructor(e){super(e,40,10,"Zombie")}}}}},t={};!function s(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}(44)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJvQkFBQSxNQUFNQSxFQUNKLFdBQUFDLENBQVlDLEVBQU1DLEVBQVFDLEVBQVNDLEVBQU8sTUFDeEMsR0FBSUgsRUFBS0ksT0FBUyxHQUFLSixFQUFLSyxPQUFTLEdBQ25DLE1BQU0sSUFBSUMsTUFBTSx1Q0FHbEJDLEtBQUtQLEtBQU9BLEVBQ1pPLEtBQUtKLEtBQU9BLEVBQ1pJLEtBQUtDLE9BQVMsSUFDZEQsS0FBS0UsTUFBUSxFQUNiRixLQUFLTixPQUFTQSxFQUNkTSxLQUFLTCxRQUFVQSxDQUNqQixDQUVBLE9BQUFRLEdBQ0UsR0FBSUgsS0FBS0MsUUFBVSxFQUNqQixNQUFNLElBQUlGLE1BQU0sb0NBR2xCQyxLQUFLRSxPQUFTLEVBQ2RGLEtBQUtOLFFBQVUsSUFDZk0sS0FBS0wsU0FBVyxJQUNoQkssS0FBS0MsT0FBUyxHQUNoQixDQUVBLE1BQUFHLENBQU9DLEdBQ0RMLEtBQUtDLE9BQVMsSUFDaEJELEtBQUtDLFFBQVVJLEdBQVUsRUFBSUwsS0FBS0wsUUFBVSxLQUVoRCxFQXVDRlcsRUFBT0MsUUFBVSxDQUNmaEIsWUFDQWlCLFNBdENGLGNBQXVCakIsRUFDckIsV0FBQUMsQ0FBWUMsR0FDVmdCLE1BQU1oQixFQUFNLEdBQUksR0FBSSxTQUN0QixHQW9DQWlCLFVBakNGLGNBQXdCbkIsRUFDdEIsV0FBQUMsQ0FBWUMsR0FDVmdCLE1BQU1oQixFQUFNLEdBQUksR0FBSSxZQUN0QixHQStCQWtCLFNBNUJGLGNBQXVCcEIsRUFDckIsV0FBQUMsQ0FBWUMsR0FDVmdCLE1BQU1oQixFQUFNLEdBQUksR0FBSSxXQUN0QixHQTBCQW1CLE9BdkJGLGNBQXFCckIsRUFDbkIsV0FBQUMsQ0FBWUMsR0FDVmdCLE1BQU1oQixFQUFNLEdBQUksR0FBSSxTQUN0QixHQXFCQW9CLE9BbEJGLGNBQXFCdEIsRUFDbkIsV0FBQUMsQ0FBWUMsR0FDVmdCLE1BQU1oQixFQUFNLEdBQUksR0FBSSxTQUN0QixHQWdCQXFCLE9BYkYsY0FBcUJ2QixFQUNuQixXQUFBQyxDQUFZQyxHQUNWZ0IsTUFBTWhCLEVBQU0sR0FBSSxHQUFJLFNBQ3RCLEcsR0NoRUVzQixFQUEyQixDQUFDLEdBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFYLFFBR3JCLElBQUlELEVBQVNTLEVBQXlCRSxHQUFZLENBR2pEVixRQUFTLENBQUMsR0FPWCxPQUhBYSxFQUFvQkgsR0FBVVgsRUFBUUEsRUFBT0MsUUFBU1MsR0FHL0NWLEVBQU9DLE9BQ2YsQ0NuQjBCUyxDQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb29wLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vb3Avd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENoYXJhcHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGF0dGFjaywgZGVmZW5jZSwgdHlwZSA9IG51bGwpIHtcbiAgICBpZiAobmFtZS5sZW5ndGggPCAyIHx8IG5hbWUubGVuZ2h0ID4gMTApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign0JjQvNGPINC00L7Qu9C20L3QviDQsdGL0YLRjCDQvtGCIDIg0LTQviAxMCDRgdC40LzQstC+0LvQvtCyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMuYXR0YWNrID0gYXR0YWNrO1xuICAgIHRoaXMuZGVmZW5jZSA9IGRlZmVuY2U7XG4gIH1cblxuICBsZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXQu9GM0LfRjyDQv9C+0LLRi9GB0LjRgtGMINGD0YDQvtCy0LXQvdGMINGD0LzQtdGA0YjQtdCz0L4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5hdHRhY2sgKj0gMS4yO1xuICAgIHRoaXMuZGVmZW5jZSAqPSAxLjI7XG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gIH1cblxuICBkYW1hZ2UocG9pbnRzKSB7XG4gICAgaWYgKHRoaXMuaGVhbHRoID4gMCkge1xuICAgICAgdGhpcy5oZWFsdGggLT0gcG9pbnRzICogKDEgLSB0aGlzLmRlZmVuY2UgLyAxMDApO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBCb3dlcm1hbiBleHRlbmRzIENoYXJhcHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lLCAyNSwgMjUsICdCb3dtYW4nKTtcbiAgfVxufVxuXG5jbGFzcyBTd29yZHNtYW4gZXh0ZW5kcyBDaGFyYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSwgNDAsIDEwLCAnU3dvcmRzbWFuJyk7XG4gIH1cbn1cblxuY2xhc3MgTWFnaWNpYW4gZXh0ZW5kcyBDaGFyYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSwgMTAsIDQwLCAnTWFnaWNpYW4nKTtcbiAgfVxufVxuXG5jbGFzcyBEYWVtb24gZXh0ZW5kcyBDaGFyYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSwgMTAsIDQwLCAnRGFlbW9uJyk7XG4gIH1cbn1cblxuY2xhc3MgVW5kZWFkIGV4dGVuZHMgQ2hhcmFwdGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKG5hbWUsIDI1LCAyNSwgJ1VuZGVhZCcpO1xuICB9XG59XG5cbmNsYXNzIFpvbWJpZSBleHRlbmRzIENoYXJhcHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lLCA0MCwgMTAsICdab21iaWUnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2hhcmFwdGVyLFxuICBCb3dlcm1hbixcbiAgU3dvcmRzbWFuLFxuICBNYWdpY2lhbixcbiAgRGFlbW9uLFxuICBVbmRlYWQsXG4gIFpvbWJpZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcbiJdLCJuYW1lcyI6WyJDaGFyYXB0ZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJhdHRhY2siLCJkZWZlbmNlIiwidHlwZSIsImxlbmd0aCIsImxlbmdodCIsIkVycm9yIiwidGhpcyIsImhlYWx0aCIsImxldmVsIiwibGV2ZWxVcCIsImRhbWFnZSIsInBvaW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJCb3dlcm1hbiIsInN1cGVyIiwiU3dvcmRzbWFuIiwiTWFnaWNpYW4iLCJEYWVtb24iLCJVbmRlYWQiLCJab21iaWUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIl0sInNvdXJjZVJvb3QiOiIifQ==