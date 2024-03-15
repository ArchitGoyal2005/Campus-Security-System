function TransitTableForm({ formData, setFormData }) {
  const handleOptionChange = (event) => {
    setFormData({ ...formData, userRole: event.target.value });
  };

  const handleSearchChange = (event) => {
    setFormData({ ...formData, search: event.target.value });
  };

  const handleEntryGateChange = (e) => {
    setFormData({ ...formData, entryGate: e.target.value });
  };

  const handleExitGateChange = (e) => {
    setFormData({ ...formData, exitGate: e.target.value });
  };

  const handleExitDateChange = (e) => {
    setFormData({ ...formData, exitTime: changeDate(e.target.value) });
  };
  const handleEntryDateChange = (e) => {
    setFormData({ ...formData, entryTime: changeDate(e.target.value) });
  };

  const changeDate = (originalDate) => {
    var parts = originalDate.split("-");

    // Rearranging the parts in the desired order
    return parts[0] + "-" + parts[2] + "-" + parts[1];
  };

  return (
    <form className="flex flex-wrap justify-between items-start m-1">
      <label className=" flex items-center gap-5s m-3 p-3   text-black font-semibold">
        User :
      </label>
      <select
        className=" flex flex-grow items-center gap-5s m-3 p-3 placeholder-black row-s rounded-3xl"
        value={formData.userRole}
        onChange={handleOptionChange}
      >
        <option value="">All</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Visitor">Visitor</option>
        <option value="BlackList">BlackList</option>
      </select>
      <label className=" flex items-center gap-5s m-3 p-3   text-black font-semibold">
        Entry Date
      </label>
      <input
        type="date"
        className=" flex flex-grow items-center gap-5s p-3 m-3 placeholder-black row-s rounded-3xl"
        placeholder="Entry Date"
        onChange={handleEntryDateChange}
      />
      <label className=" flex items-center gap-5s m-3 p-3   text-black font-semibold">
        Exit Date
      </label>
      <input
        type="date"
        className=" flex flex-grow items-center gap-5s p-3 m-3 placeholder-black row-s rounded-3xl"
        placeholder="Exit Date"
        onChange={handleExitDateChange}
      />
      <input
        type="number"
        className=" flex items-center gap-5s p-3 m-3 placeholder-black row-s rounded-3xl"
        placeholder="Entry Gate"
        onChange={handleEntryGateChange}
      />
      <input
        type="number"
        className=" flex items-center gap-5s p-3 m-3 placeholder-black row-s rounded-3xl"
        placeholder="Exit Gate"
        onChange={handleExitGateChange}
      />

      <input
        type="search"
        placeholder="Search By Mobile"
        className="flex-grow flex items-center gap-5 p-3 m-3   placeholder-black ml-auto rounded-3xl"
        value={formData.search}
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default TransitTableForm;
